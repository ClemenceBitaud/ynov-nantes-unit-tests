const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should diminuer sellIn", function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });

  it('should diminuer quality', function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });

  it('should perdre la quality 2 fois plus vite quand date de sellIn < 0', function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it('should Aged Brie quality augmente quality plus le temps passe', function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it('should quality jamais au dessus de 50', function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("test qualité négative", function (){
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("test qualité et jours restants Sulfuras", function (){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(-1);
  });

  it('should Aged Brie augmente quality même quand sellIn < 0 si quality < 50 ', function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it('should Aged Brie pas augmenté sa quality quand elle est au dessus 50 quand sellIn < 0 ', function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("test qualité Backstage passes", function (){
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
    expect(items[1].quality).toBe(22);
    expect(items[2].quality).toBe(22);
    expect(items[3].quality).toBe(50);
    expect(items[4].quality).toBe(23);
    expect(items[5].quality).toBe(23);
    expect(items[6].quality).toBe(50);
    expect(items[7].quality).toBe(0);
  });
});
