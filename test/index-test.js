describe('index', () => {
  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).to.equal('nested')
      expect(getFirstSelector('.ranked-list')).to.equal(document.querySelector('.ranked-list'))
    })
  })

  describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).to.equal(document.querySelector('#nested .target'))
    })
  })

  describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).to.equal(
  1) index
       deepestChild()
         returns the most deeply nested child in #grand-node:

      AssertionError: expected { Object (0, 1, ...) } to equal { Object () }
      + expected - actual

      -{
      -  "0": {}
      -  "1": {}
      -  "2": {}
      -  "3": {}
      -}
      +{}

      at Context.it (test/index-test.js:18:33)

  2) index
       increaseRankBy(n)
         increases ranks in .ranked-list by n:

      AssertionError: expected 3 to equal 4
      + expected - actual

      -3
      +4

      at Context.it (test/index-test.js:35:52)

'))
    })
  })

  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1

      expect(children.length).to.equal(2);
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
      }

      children = secondList.children
      start = 12

      expect(children.length).to.equal(3);
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
      }
    })
  })
})
