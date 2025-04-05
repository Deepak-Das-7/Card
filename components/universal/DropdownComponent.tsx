import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface DropdownProps {
    label: string;
    items: { label: string; value: string }[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, value, setValue }) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={(callback) => {
                    if (typeof callback === "function") {
                        setValue(callback(value));
                    } else {
                        setValue(callback);
                    }
                }}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                listItemContainerStyle={styles.listItemContainer}
                listItemLabelStyle={styles.listItemLabel}
                containerStyle={{ zIndex: 1000 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        zIndex: 1000,
    },
    label: {
        fontSize: 10,
        fontWeight: "500",
        color: "#444",
        marginBottom: 2,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccfcf8",
        borderRadius: 8,
        backgroundColor: "#f0fefd",
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: "#ccfcf8",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 2,
    },
    listItemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    listItemLabel: {
        fontSize: 12,
        color: "#333",
    },
});

export default Dropdown;
