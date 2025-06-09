import { StyleSheet } from 'react-native';
import {
    requestPermissionsAsync,
    getContactsAsync,
    PermissionStatus,
    Fields,
} from 'expo-contacts';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';

export default function TabOneScreen() {
    useEffect(() => {
        (async () => {
            const { status } = await requestPermissionsAsync();
            if (status === PermissionStatus.GRANTED) {
                const { data } = await getContactsAsync({
                    fields: [Fields.Emails],
                });

                if (data.length > 0) {
                    const contact = data[0];
                    console.log('name: ', contact.name, '\n');
                    console.log(
                        'emails: ',
                        contact.emails?.map((c) => c.email)?.join(', '),
                        '\n'
                    );
                    console.log('id:', contact.id);
                }
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
