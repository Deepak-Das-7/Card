import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";

interface TextInputFieldProps {
    label: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
}

export default function InputComponent({
    label,
    value,
    placeholder,
    onChangeText,
    keyboardType = "default"
}: TextInputFieldProps) {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType} // ✅ Apply the keyboardType
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fieldContainer: { marginBottom: 12 },
    label: { fontSize: 10, fontWeight: "500", color: "#444", marginBottom: 2 },
    input: {
        borderWidth: 1,
        borderColor: "#ccfcf8",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        backgroundColor: "#f0fefd",
    },
});
