import React from 'react';

const onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.Name.value;
    console.log(name);
    console.log('Form submitted')
}

const Contact = () => (
    <div>
        <div className="any-text litegrey2 padding100">
            <div className="container">


                <div className="row">
                    <p>This is Contact.</p>
                    <form onSubmit={onFormSubmit}>
                        <input type="text" name="Name" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Contact;