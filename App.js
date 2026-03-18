import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, ScrollView } from 'react-native';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  // Estados padronizados com "Aluno"
  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoAluno, setCursoAluno] = useState('');
  const [disciplinaAluno, setDisciplinaAluno] = useState('');
  const [descricaoAluno, setDescricaoAluno] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);

  // Função para atualizar e esconder o resultado anterior
  const atualizarCampo = (setter, valor) => {
    setter(valor);
    setMostrarDados(false);
  };

  // Verifica se todos os campos têm conteúdo
  const formularioValido = nomeAluno && cursoAluno && disciplinaAluno && descricaoAluno;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastro do Aluno</Text>
        
        <TextInput 
          placeholder='Nome' 
          value={nomeAluno} 
          onChangeText={(v) => atualizarCampo(setNomeAluno, v)} 
          style={styles.input}
        />
        
        <TextInput 
          placeholder='Curso' 
          value={cursoAluno} 
          onChangeText={(v) => atualizarCampo(setCursoAluno, v)} 
          style={styles.input}
        />

        <TextInput 
          placeholder='Disciplina' 
          value={disciplinaAluno} 
          onChangeText={(v) => atualizarCampo(setDisciplinaAluno, v)} 
          style={styles.input}
        />

        <TextInput 
          placeholder='Descrição' 
          value={descricaoAluno} 
          multiline
          onChangeText={(v) => atualizarCampo(setDescricaoAluno, v)} 
          style={[styles.input, { height: 60 }]}
        />

        <Button 
          title='Enviar Dados' 
          color={'#000'} 
          onPress={() => setMostrarDados(true)}
          disabled={!formularioValido} 
        />

        {mostrarDados && (
          <RenderizarDados 
            nome={nomeAluno} 
            curso={cursoAluno} 
            disciplina={disciplinaAluno} 
            descricao={descricaoAluno} 
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  input: { width: '100%', borderBottomWidth: 1, marginBottom: 15, padding: 8 }
});
