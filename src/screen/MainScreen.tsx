/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import CFlipCard from '../components/FlipCard';
import {isCardPaired, isCompleted, shuffleCards} from '../utils/MainUtil';
import styles from './styles';

function MainScreen() {
  const [cards, setCards]: any = useState([]);
  const [steps, setSteps] = useState(0);
  const [flippedCards, setFlipped] = useState(0);
  const [cardsObj, setCardsObj]: any = useState([]);
  const [toFlipped, forFlipped] = useState(false);
  const ref: any = useRef([]);

  useLayoutEffect(() => {
    initState();
  }, []);

  useEffect(() => {
    if (cards.length === 0) {
      setCards(shuffleCards());
    }
    if (cards.length > 0 && !isCompleted(cards)) {
      Alert.alert(
        'Congratulations',
        `You win this game by ${steps} steps!`,
        [
          {
            text: 'Try another round',
            onPress: () => {
              initState();
            },
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      if (toFlipped && flippedCards === 2) {
        flippedIt();
        forFlipped(false);
        setFlipped(0);
      }
    }, 500);
  }, [flippedCards, toFlipped]);

  const flippedIt = () => {
    if (!isCardPaired(cardsObj)) {
      ref.current[cardsObj[0].index].flipHorizontal();
      ref.current[cardsObj[1].index].flipHorizontal();
    } else {
      cards[cardsObj[0].index].pair = true;
      cards[cardsObj[1].index].pair = true;
      setCards([...cards]);
    }
    setCardsObj([]);
  };

  const initState = () => {
    setCards([]);
    setSteps(0);
    setFlipped(0);
    forFlipped(false);
    setCardsObj([]);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Button
            title="Restart"
            onPress={() => {
              initState();
            }}
          />
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.textFormat}>STEPS: </Text>
          <Text style={[styles.textFormat, {color: 'blue'}]}>{steps}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {cards.map((item, index) => (
          <CFlipCard
            ref={el => (ref.current[index] = el)}
            item={item}
            key={index}
            index={index}
            onFlipCard={(item, index) => {
              if (flippedCards < 2) {
                setSteps(steps + 1);
                setFlipped(flippedCards + 1);
                setCardsObj([...cardsObj, {item: item, index: index}]);
                ref.current[index].flipHorizontal();
              }
            }}
            onFlipEnd={() => {
              if (flippedCards === 2) {
                forFlipped(true);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
}

export default MainScreen;
