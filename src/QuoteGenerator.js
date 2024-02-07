import React, {
    Component
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);



const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King",
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort",
    },
    {
        quote: "You don't have to be rich to travel well.",
        author: "Eugene Fodor",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen R. Covey",
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
    },
    {
        quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats",
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein",
    },
    {
        quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill",
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali",
    },
];


export default class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        };
        this.generateRandomQuote = this.generateRandomQuote.bind(this);
    }

    generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length); 
        const randomQuote = quotes[randomIndex]; 
        this.setState({ 
            quote: randomQuote.quote, 
            author: randomQuote.author 
        }); 
    }

    componentDidMount() {
        this.generateRandomQuote();
    }

    render() {
        return ( 
            <div>
                <div id="text">
                    <p id="quote">
                    "{this.state.quote}"
                    </p>
                    <p id="author">
                    - {this.state.author}
                    </p>
                </div>
                <div id='buttons'>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.quote + ' - ' + this.state.author)}`}>
                        <FontAwesomeIcon icon={['fab', 'twitter']} /> 
                    </a>
                    <a onClick={this.generateRandomQuote} id="new-quote">
                        New Quote
                    </a>
                </div>
            </div>
        )
    }
}