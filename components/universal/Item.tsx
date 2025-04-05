import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type ReportCardProps = {
    heading: string;
    subheading: string;
    date: string;
    onPress?: () => void;
    onEdit?: () => void;
    onDownload?: () => void;
};

export default function ReportCard({ heading, subheading, date, onPress, onEdit, onDownload }: ReportCardProps) {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.infoContainer} onPress={onPress}>
                <Text style={styles.heading}>{heading}</Text>
                <View style={styles.detailsRow}>
                    <Text style={styles.subheading}>{subheading}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </TouchableOpacity>

            {(onEdit || onDownload) && (
                <View style={styles.iconContainer}>
                    {onEdit && (
                        <TouchableOpacity onPress={onEdit} >
                            <Ionicons name="create-outline" size={22} color="#007bff" />
                        </TouchableOpacity>
                    )}
                    {onDownload && (
                        <TouchableOpacity onPress={onDownload} >
                            <Ionicons name="download-outline" size={22} color="#28a745" />
                        </TouchableOpacity>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginBottom: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15
    },
    infoContainer: {
        flex: 1,
    },
    heading: {
        fontSize: 13,
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subheading: {
        fontSize: 11,
        color: "#555",
    },
    date: {
        fontSize: 10,
        color: "#888",
    },
    iconContainer: {
        flexDirection: "row",
        gap: 15,
    }
});
