import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

interface DatePickerFieldProps {
    label: string;
    date: Date;
    onChange: (date: Date) => void;
}

export default function DatePickerField({ label, date, onChange }: DatePickerFieldProps) {
    const [showPicker, setShowPicker] = useState(false);

    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowPicker(true)}>
                <Text style={styles.dateText}>{format(date, "dd/MM/yyyy")}</Text>
            </TouchableOpacity>
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowPicker(false);
                        if (selectedDate) onChange(selectedDate);
                    }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    fieldContainer: { marginBottom: 12 },
    label: { fontSize: 10, fontWeight: "500", color: "#444", marginBottom: 2 },
    dateInput: {
        borderWidth: 1,
        borderColor: "#ccfcf8",
        borderRadius: 8,
        padding: 9,
        backgroundColor: "#f1fefd",
        justifyContent: "center",
    },
    dateText: { fontSize: 16, color: "#333" },
});
