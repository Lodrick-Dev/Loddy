import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './Styles';
import ModalInfos from '../../Components/ModalInfos/ModalInfos';
import SwipeableItem from '../../Components/SwipeableItem/SwipeableItem';
const STORAGE_KEY = '@shopping_items';

type Item = {
  id: string;
  name: string;
  qty: number;
  price: number;
};
export default function ShoppingScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [infoVisible, setInfoVisible] = useState(false);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items],
  );

  // Fonction pour parser correctement le prix
  const parsePrice = (input: string) => {
    // On remplace la virgule par un point
    let cleaned = input.replace(',', '.');

    // On supprime tous les caractères qui ne sont pas chiffre ou point
    cleaned = cleaned.replace(/[^0-9.]/g, '');

    // Si plus d’un point, on considère la saisie invalide
    const parts = cleaned.split('.');
    if (parts.length > 2) return '';

    // Limite à 2 décimales
    if (parts[1]?.length > 2) {
      cleaned = parts[0] + '.' + parts[1].slice(0, 2);
    }

    return cleaned;
  };

  const addItem = () => {
    const normalizedQty = Number(qty);
    const normalizedPrice = Number(price);
    if (!name || isNaN(normalizedQty) || isNaN(normalizedPrice)) {
      return;
    }

    //sauvegarde dans le storage
    const newItem = {
      id: Date.now().toString(),
      name,
      qty: normalizedQty,
      price: normalizedPrice,
    };
    saveItemsStorage([...items, newItem]);

    setName('');
    setQty('');
    setPrice('');
  };
  const saveItemsStorage = async (newItems: Item[]) => {
    setItems(newItems);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    } catch (e) {
      console.log('Erreur sauvegarde des produits :', e);
    }
  };
  const deleteAllItems = () => {
    Alert.alert(
      'Supprimer tous les produits',
      'Êtes-vous sûr de vouloir supprimer tous les produits ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            setItems([]); // vide le state
            try {
              await AsyncStorage.removeItem(STORAGE_KEY); // vide le storage
            } catch (e) {
              console.log('Erreur suppression de tous les produits :', e);
            }
          },
        },
      ],
    );
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setItems(JSON.parse(stored));
      } catch (e) {
        console.log('Erreur chargement des produits :', e);
      }
    };
    loadItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.totalBox}>
        <Text style={styles.totalLabel}>Total</Text>
        <View style={styles.boxtotal}>
          <Text style={styles.totalValue}>{total.toFixed(2)} €</Text>
          <Pressable
            onPress={() => setInfoVisible(true)}
            style={styles.btnInfos}
          >
            <Text style={styles.textInfos}>!</Text>
          </Pressable>
        </View>
        <Text style={styles.totalProducts}>Produits: {items.length}</Text>
        {items.length > 0 && (
          <Pressable
            style={[
              styles.button,
              { backgroundColor: '#EF4444', marginTop: 10 },
            ]}
            onPress={deleteAllItems}
          >
            <Text style={styles.buttonText}>Supprimer tout</Text>
          </Pressable>
        )}
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SwipeableItem
            item={item}
            onDelete={id => {
              const filtered = items.filter(i => i.id !== id);
              saveItemsStorage(filtered);
            }}
          />
        )}
      />
      <View style={styles.form}>
        <TextInput
          placeholder="Produit"
          placeholderTextColor="#6B7280"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Qté"
          placeholderTextColor="#6B7280"
          keyboardType="number-pad"
          value={qty}
          onChangeText={setQty}
          style={styles.input}
        />
        <TextInput
          placeholder="Prix"
          placeholderTextColor="#6B7280" //pour que le placeholder soit visible sur les écrans sombres
          keyboardType="decimal-pad"
          value={price}
          onChangeText={text => setPrice(parsePrice(text))}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </Pressable>
      </View>
      <ModalInfos
        visible={infoVisible}
        onClose={() => setInfoVisible(false)}
        websiteUrl="https://loryum.com"
      />
    </SafeAreaView>
  );
}
