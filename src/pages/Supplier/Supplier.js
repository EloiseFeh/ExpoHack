import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { db } from '../../services/firebaseConnections';
import { doc, getDoc } from 'firebase/firestore';

const SupplierPage = () => {
    const { id } = useParams();
    const [supplier, setSupplier] = useState(true);

    async function SuppierId(id) {
        try {
          const supplierDoc = await getDoc(doc(db, 'fornecedores', id));
          if (supplierDoc.exists()) {
            const supplierData = supplierDoc.data();
            const lista = {
              id: id,
              nome: supplierData.nome,
              categoria: supplierData.categoria,
              descricao: supplierData.descricao,
            };
            console.log(lista)
            setSupplier(lista);
          } else {
            console.log("Planta Não encontrada");
          }
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        SuppierId(id);
      }, [id]);
      console.log(supplier);
    return (
        <div>
            
        </div>
    );
};

export default SupplierPage;