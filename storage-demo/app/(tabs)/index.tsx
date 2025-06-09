import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';

import database from '../../db';
import Post from '@/model/post';

const createTestPost = async () => {
    const posts = database.get<Post>('posts');

    await database.write(async () => {
        await posts.create((post) => {
            post.title = 'New post';
            post.body = 'la cuca';
        });
    });
};

const readTestPost = async () => {
    const posts = database.get<Post>('posts');

    await database.write(async () => {
        await posts.create((post) => {
            post.title = 'New post';
            post.body = 'la cuca';
        });
    });

    const hehe = await posts.query().fetch();
    console.log(hehe[0].title);
};

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <TouchableOpacity onPress={createTestPost}>
                <Text>Create Test Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={readTestPost}>
                <Text>Read Test Post</Text>
            </TouchableOpacity>
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
