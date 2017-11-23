import $ from 'jquery'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Lottery',
      numbers: [],
      numbersFull: false
    }
  },
  methods: {
    toggleNumbers: function (e) {
      let clickedButton = e.target
      if (this.numbers.length < 12) { // array not full
        // console.log(this.numbers.length)
        this.numbers.indexOf(clickedButton.innerText) < 0 ? this.addToSelected(clickedButton) : this.removeFromSelected(clickedButton)
      } else {
        if (this.numbers.indexOf(clickedButton.innerText) >= 0) {
          this.removeFromSelected(clickedButton)
        }
      }
    },
    addToSelected: function (item) {
      // pushes to array and highlights
      this.numbers.push(item.innerText)
      $(item).addClass('btn-info')
      console.log('add ' + item.innerText + ' to [' + this.numbers + ']')
      if (this.numbers.length === 12) {
        console.log('array is full')
        this.highlightAllNumbers()
      }
    },
    removeFromSelected: function (item) {
      // finds the position in array, removes and unhighlights
      let positionInArray = this.numbers.indexOf(item.innerText)
      this.numbers.splice(positionInArray, 1)
      $(item).removeClass('btn-info btn-success')
      console.log('remove ' + item.innerText + ' from [' + this.numbers + ']')
      if (this.numbers.length < 12) {
        this.unhighlightAllNumbers()
      }
    },
    randomNumbers: function () {
      // pushes to array 12 random numbers and highlights them
      if (this.numbers.length > -1) {
        this.deleteNumbers()
      }
      let i = 0
      while (i < 12) {
        let min = 1
        let max = 45
        let rand = Math.floor((Math.random() * max) + min) + ''
        this.numbers.push(rand)
        $('.number-btn').each(function () {
          if ($(this).html() === rand) {
            $(this).addClass('btn-success')
          }
        })
        i++
      }
      console.log('randomized: ' + this.numbers)
    },
    deleteNumbers: function () {
      $('.number-btn').removeClass('btn-info btn-success')
      this.numbers = []
      console.log('delete all from array')
    },
    highlightAllNumbers: function () {
      $('.btn-info').each(function () {
        $(this).addClass('btn-success').removeClass('btn-info')
      })
      console.log('color all ' + this.numbers)
    },
    unhighlightAllNumbers: function () {
      $('.btn-success').each(function () {
        $(this).addClass('btn-info').removeClass('btn-success')
      })
      console.log('uncolor all ' + this.numbers)
    },
    saveNumbers: function () {
      // console.log(typeof $('.btn'))
    }
  }
}
