import React, { useState, useRef } from 'react'
import { View, Text, FlatList, Image, TouchableWithoutFeedback, Modal, TouchableOpacity, } from "react-native";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import styles from '../styles/index'
import { Characters, Loading } from '../components';
export default function List() {
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [name, setName] = useState("rick")
    const flatListRef = useRef(null)
    const getQuery = gql`
      query {
        characters(page:${page},filter: {name:"${name}"}) {
          info {
            pages
          }
          results {
            id
            name
            location {
              name
            }
            image
          }
        }
      
      }
      `;

    const { data, loading, error } = useQuery(getQuery);

    
    const _handeOnEndReached = (info) => {
        if (loading || error) {

        } else {
            if (page < data?.characters.info.pages) {
                setPage(page + 1)
            }
        }
    }

    const apply = (name) => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        setPage(1)
        setName(name)
        setModal(false)

    }

    if (loading || error) return (<Loading />)
    else {
        return (
            <View style={styles.container} >
                <View style={styles.headerContainer}>
                    <Text allowFontScaling={false} style={styles.headerText}>Rick and Morty</Text>
                    <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
                        <Image source={require("../sourceFiles/filterIcon.png")} style={styles.filterIcon} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                    <FlatList
                        ref={flatListRef}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={data.characters.results}
                        renderItem={({ item }) => {
                            return (
                                <Characters item={item} />
                            );
                        }}
                        keyExtractor={item => item.id}
                        onEndReached={_handeOnEndReached}
                    />
                </View>
                <Modal animationType="fade" transparent={true} visible={modal} onRequestClose={() => setModal(false)} statusBarTranslucent={true}>
                    {modal ? <View style={{ position: 'absolute', backgroundColor: 'black', opacity: 0.7, width: "100%", height: "100%" }}></View> : null}
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.filterContainer}>
                            <View style={styles.filterHeaderContainer}>
                                <Text allowFontScaling={false} style={[styles.headerText, { marginTop: 10 }]}>Filter</Text>
                            </View>
                            <View style={styles.filterBodyContainer}>
                                <Text allowFontScaling={false} style={[styles.itemText, { fontSize: 24, marginLeft: 0 }]}>Rick</Text>
                                <TouchableOpacity onPress={() => apply("rick")} style={styles.filterButton}>
                                    {name === "rick" ? <View style={styles.filterSelectButton}></View> : null}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.filterBodyContainer}>
                                <Text allowFontScaling={false} style={[styles.itemText, { fontSize: 24, marginLeft: 0 }]}>Morty</Text>
                                <TouchableOpacity onPress={() => apply("morty")} style={styles.filterButton}>
                                    {name === "morty" ? <View style={styles.filterSelectButton}></View> : null}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        )
    }
}