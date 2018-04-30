import $ from 'jquery'
import { mapState } from 'vuex'

export default {
  name: 'LotteryBlock',
  data () {
    return {
      msg: 'Lottery',
      numbers: [],
      maxNumbersLength: 12
    }
  },
  computed: mapState({
    ticket: state => state.user.ticket,
    hasTicket: state => state.user.hasTicket
  }),
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
      // let i = 0
      while (this.numbers.length < 12) {
        let min = 1
        let max = 45
        let rand = Math.floor((Math.random() * max) + min) + ''
        if (this.numbers.indexOf(rand) < 0) {
          this.numbers.push(rand)
          $('.number-btn').each(function () {
            if ($(this).html() === rand) {
              $(this).addClass('btn-success')
            }
          })
        }
        // i++
      }
      console.log('randomized: ' + this.numbers)
    },
    deleteNumbers: function () {
      $('.number-btn').removeClass('btn-info btn-success')
      this.numbers = []
      console.log('delete all from array')
    },
    highlightAllNumbers: function () {
      $('.number-btn.btn-info').each(function () {
        $(this).addClass('btn-success').removeClass('btn-info')
      })
      console.log('color all ' + this.numbers)
    },
    unhighlightAllNumbers: function () {
      $('.number-btn.btn-success').each(function () {
        $(this).addClass('btn-info').removeClass('btn-success')
      })
      console.log('uncolor all ' + this.numbers)
    },
    saveNumbers: function () {
      console.log('current ticket: ' + this.ticket)
      console.log('ticket exists? -> ' + this.hasTicket)
      if (this.hasTicket === true) {
        this.$store.state.user.ticket = []
        console.log('should be empty array -> new: ' + this.ticket)
      }
      this.$store.dispatch('addNumbersToTicket', this.numbers).then(() => {
        this.$router.push('/')
      })
    }
  }
}
