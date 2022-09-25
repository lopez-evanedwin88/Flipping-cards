import React, {FunctionComponent} from 'react';
import {Pressable, Text} from 'react-native';
import FlipCard from 'react-native-flip-card-plus';

import styles from './styles';

interface FlipCardProps {
  item: any;
  onFlipCard: (item, index) => void;
  onFlipEnd: (item, index) => void;
  index: any;
}

const CFlipCard: FunctionComponent<FlipCardProps> = React.forwardRef(
  (
    {item, onFlipCard, onFlipEnd, index}: FlipCardProps,
    ref: React.Ref<Array<any>>,
  ) => {
    return (
      <>
        <FlipCard
          flipDirection={'h'}
          style={styles.cardContainer}
          onFlipEnd={(item, index) => {
            onFlipEnd(item, index);
          }}
          ref={ref}>
          {/* front is 0 */}
          <Pressable
            style={styles.card}
            onPress={() => {
              onFlipCard(item, index);
            }}>
            <Text style={styles.label}>?</Text>
          </Pressable>
          {/* back is 1 */}
          <Pressable style={[styles.card, styles.frontCard]} onPress={() => {}}>
            <Text style={[styles.label, styles.frontText]}>{item.num}</Text>
          </Pressable>
        </FlipCard>
      </>
    );
  },
);

export default CFlipCard;
