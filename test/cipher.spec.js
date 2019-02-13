describe('cipher', () => {

  it('debería ser un objeto', () => {
      assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

      it('debería ser una función', () => {
          assert.equal(typeof cipher.encode, 'function');
      });

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
          assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
      });
      it('deberia retornar " " para " " con offset 1', () => {
          assert.equal(cipher.encode(" ", 1), " ");
      });


  });

  describe('cipher.decode', () => {

      it('debería ser una función', () => {
          assert.equal(typeof cipher.decode, 'function');
      });

      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {

          assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

      });
      it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "abcdefghijklmnopqrstuvwxyz" con offest 1', () => {

          assert.equal(cipher.decode("abcdefghijklmnopqrstuvwxyz", 1), "abcdefghijklmnopqrstuvwxyz");

      });
  })
})
