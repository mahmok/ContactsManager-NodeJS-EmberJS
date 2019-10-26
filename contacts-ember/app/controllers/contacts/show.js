import Controller from '@ember/controller';

export default Controller.extend({
    id: "",
    name: "",
    email: "",
    mobile: "",

    init(){
        this._super(...arguments);

    },

    actions: {
        submit()
        {
            
            this.store.findRecord('contact', this.id).then((contact) => {
                contact.set('name', this.name);
                contact.set('email', this.email);
                contact.set('mobile', this.mobile);
                contact.save();

                alert("Contact Updated!");
            });

            
        }
    }
});
