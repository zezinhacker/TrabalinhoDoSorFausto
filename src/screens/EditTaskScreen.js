import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const EditTaskScreen = ({ route, navigation }) => {
  const { editTask } = route.params;
  const [task, setTask] = useState('');

  useEffect(() => {
    setTask(editTask.description);
  }, [editTask]);

  const handleEditTask = async () => {
    await firestore().collection('tasks').doc(editTask.id).update({ description: task });
    console.log('Tarefa editada:', editTask.id, task);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={text => setTask(text)}
        style={{ marginBottom: 8, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Salvar Tarefa" onPress={handleEditTask} />
    </View>
  );
};

const CreateTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState('');

  const handleCreateTask = async () => {
    await firestore().collection('tasks').add({ description: task });
    console.log('Nova tarefa:', task);
    setTask('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={text => setTask(text)}
        style={{ marginBottom: 8, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Criar Tarefa" onPress={handleCreateTask} />
      <Button
        title="Editar Tarefa"
        onPress={() => navigation.navigate('EditTask', { editTask: { description: task } })}
      />
    </View>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} options={{ title: 'Criar Tarefa' }} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} options={{ title: 'Editar Tarefa' }} />
    </Stack.Navigator>
  );
};

export default App;