const inquirer = require('inquirer');

const preguntas = [
    {
        message: '¿Es para domicilio?',
        type: 'confirm',
        default: false,
        name: 'isDelivery'
    },
    {
        message: 'Dime tu teléfono',
        type: 'input',
        name: 'phone'
    },
    {
        message: '¿Cuántas pizzas?',
        type: 'input',
        name: 'amount',
        filter: Number,
        validate: value => {
            const isNotValid = isNaN(parseInt(value));
            
            if (isNotValid) {
                return 'Por favor, debes introducir un número'
            } else {
                return !isNotValid;
            }
        }
    },
    {
        message: '¿Qué tamaño quieres?',
        type: 'list',
        choices: ['Grande', 'Mediana', 'Pequeña'],
        name: 'size'
    },
    {
        message: '¿Qué ingredientes quieres?',
        type: 'expand',
        name: 'ingredients',
        choices: [
            {
                key: 'p',
                name: 'Pepperoni',
                value: 'pepperoni'
            },
            {
                key: 'q',
                name: 'Queso',
                value: 'queso'
            },
            {
                key: 't',
                name: 'Ternera',
                value: 'ternera'
            }
        ]
    },
    {
        message: 'Elija una bebida',
        type: 'rawlist',
        name: 'bebida',
        choices: ['Refresco', 'Cerveza', 'Agua']
    }
];

inquirer.prompt(preguntas)
    .then(respuestas => {
        console.log(respuestas)
    });