
export const state = {
     global: {
          baseUrl: '',
          userName: ''
     },
     ui: {
          windowCollapsed: false,
          showCartList:false,
     },
     products: {
          all: []
     },
     cart: {
          added: [],
          checkoutStatus: '',
          quantity:0,
          total:Number,
     },
     title: 'My Custom Title',
     count: 0,
     error: false,
     success: false,
     links: [
          'http://google.com',
          'http://coursetro.com',
          'http://youtube.com'
     ],
     todos: [
          { id: 1, text: 'textA', done: true },
          { id: 2, text: 'textB', done: false },
          { id: 3, text: 'textC', done: true }

        ]
} 