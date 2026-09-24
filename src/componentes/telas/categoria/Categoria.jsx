import { useState, useEffect } from 'react';
import CategoriaContext from './CategoriaContext';
import {
    getCategoriasAPI,
    deleteCategoriaPorCodigoAPI,
} from '../../../servicos/CategoriaServico';

import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';

function Categoria() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [objeto, setObjeto] = useState({ codigo: 0, nome: "" });
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ codigo: 0, nome: "" });
        setExibirForm(true);
    };

    const editarObjeto = async (codigo) => {
        setEditar(true);
        setAlerta({ status: "", message: "" });
        // Lógica de carregar o objeto a ser editado
        setExibirForm(true);
    };

    const acaoCadastrar = async (e) => {
        e.preventDefault();
        // Lógica de cadastro / atualização
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObjeto({ ...objeto, [name]: value });
    };

    const recuperaCategorias = async () => {
        setCarregando(true);
        setListaObjetos(await getCategoriasAPI());
        setCarregando(false);
    };

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteCategoriaPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaCategorias();
        }
    };

    useEffect(() => {
        recuperaCategorias();
    }, []);

    return (
        <CategoriaContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
                <Formulario />
            </Carregando>
        </CategoriaContext.Provider>
    );
}

export default Categoria;