const parent = React.createElement('div',
    { id: 'parent' },
    [React.createElement('div',
        { id: 'child', },
        [React.createElement('div',
            {}, React.createElement('h1', {}, 'Sibiling 1 child')), React.createElement('h2',
                {}, 'Sibiling 2')]), React.createElement('div',
                    { id: 'child2', },
                    [React.createElement('div',
                        {}, React.createElement('h1', {}, 'Sibiling 3 child')), React.createElement('h2',
                            {}, 'Sibiling 4')])]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);




// const heading = React.createElement('input', {
//     id: 'heading',
//     className: 'bankai',
//     autoComplete: 'off',
//     placeholder: 'Enter Text',
//     required: true
// });

// const button = React.createElement('button', {
//     id: 'button',
// }, 'Submit');
// root.render(button);
