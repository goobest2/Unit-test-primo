import { merge } from './Merged';

test('Input Array sorted มาเรียบร้อยแล้ว ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง', () => {
  const collection1 = [1, 3, 5, 7];
  const collection2 = [2, 4, 6, 8];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];

  const result = merge(collection1, collection2);

  expect(result).toEqual(expected);
});
test('มี Array ขนาดไม่เท่ากัน ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง', () => {
    const collection1 = [0, 0, 1, 3];
    const collection2 = [4, 5, 6];
    const expected = [0, 0, 1, 3, 4, 5, 6];
  
    const result = merge(collection1, collection2);
  
    expect(result).toEqual(expected);
  });  

  test('มี input ที่เป็นlist เปล่า ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง', () => {
 
    const collection2 = [4, 5, 6];
    const expected = [4, 5, 6];
  
    const result = merge([], collection2);
  
    expect(result).toEqual(expected);
  });  

test('ควร return ค่า Error ="Array is not sorted"', () => {
    const collection1 = [0, 0, 1, 3];
    const collection2 = [4, 2, 6, 7];
    const expected = [0, 0, 1, 2, 3, 4, 6, 7];
  
    const result = merge(collection1, collection2);
  
    expect(result).toEqual(expected);
  });

  test('ควร return ค่า Error ="Array has float number"', () => {
    const collection1 = [0, 0, 1, 3];
    const collection2 = [0.1, 2, 6, 7];
    const expected = [0, 0, 0.1, 1, 2, 3, 6, 7];
  
    const result = merge(collection1, collection2);
  
    expect(result).toEqual(expected);
  });  

  test('ควร return ค่า Error ="Array has negative number', () => {
    const collection1 = [0, 0, 1, 3];
    const collection2 = [-1, 2, 6, 7];
    const expected = [-1, 0, 0, 1, 2, 3, 6, 7];
  
    const result = merge(collection1, collection2);
  
    expect(result).toEqual(expected);
  });  

 