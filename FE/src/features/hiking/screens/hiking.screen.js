import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.components";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { HikingContext } from "../../../services/hikings/hiking.context";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { Search } from "../components/search.component";
import { HikingInfoCard } from "../components/hiking-info-card.component";
import { Modal } from "react-native-paper";
import { UpSert } from "../components/upSert.component";

const HikingScreen = () => {
  const { hikings } = useContext(HikingContext);
  const [visible, setVisible] = useState(false);
  const [updateHiking, setUpdateHiking] = useState(undefined);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onUpdate = (hiking) => {
    setUpdateHiking(hiking);
    showModal();
  };
  const onCreate = () => {
    setUpdateHiking(undefined);
    showModal();
  };

  return (
    <SafeArea>
      <Search />
      <FlatList
        data={hikings}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="medium">
            <HikingInfoCard onUpdate={onUpdate} hiking={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={onCreate} style={styles.createButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <UpSert updateHiking={updateHiking} onClose={() => setVisible(false)} />
      </Modal>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: 300,
  },
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "green",
    borderRadius: 50,
    width: 65,
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },
});

export default HikingScreen;
