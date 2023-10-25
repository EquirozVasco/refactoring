import { Item, GildedRose } from '@/gilded-rose';

describe('GildedRose', () => {
  it('should update item quality and sellIn correctly for normal items', () => {
    const items = [
      new Item('Normal Item 1', 10, 20),
      new Item('Normal Item 2', 0, 10),
      new Item('Normal Item 3', -1, 5),
    ];
    const gildedRose = new GildedRose(items);

    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(19);
    expect(updatedItems[0].sellIn).toBe(9);

    expect(updatedItems[1].quality).toBe(8);
    expect(updatedItems[1].sellIn).toBe(-1);

    expect(updatedItems[2].quality).toBe(3);
    expect(updatedItems[2].sellIn).toBe(-2);
  });

  it('should update item quality and sellIn correctly for "Aged Brie"', () => {
    const items = [
      new Item('Aged Brie', 10, 20),
      new Item('Aged Brie', 0, 10),
    ];
    const gildedRose = new GildedRose(items);

    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(21);
    expect(updatedItems[0].sellIn).toBe(9);

    expect(updatedItems[1].quality).toBe(12);
    expect(updatedItems[1].sellIn).toBe(-1);
  });

  it('should update item quality and sellIn correctly for "Sulfuras, Hand of Ragnaros"', () => {
    const items = [
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
    ];
    const gildedRose = new GildedRose(items);

    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(80);
    expect(updatedItems[0].sellIn).toBe(0);

    expect(updatedItems[1].quality).toBe(80);
    expect(updatedItems[1].sellIn).toBe(-1);
  });

  it('should update item quality and sellIn correctly for "Backstage passes to a TAFKAL80ETC concert"', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45),
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 45),
    ];
    const gildedRose = new GildedRose(items);

    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(21);
    expect(updatedItems[0].sellIn).toBe(19);

    expect(updatedItems[1].quality).toBe(47);
    expect(updatedItems[1].sellIn).toBe(9);

    expect(updatedItems[2].quality).toBe(48);
    expect(updatedItems[2].sellIn).toBe(4);

    expect(updatedItems[3].quality).toBe(0);
    expect(updatedItems[3].sellIn).toBe(-1);
  });
});