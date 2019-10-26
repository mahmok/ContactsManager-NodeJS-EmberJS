import Controller from '@ember/controller';

export default Controller.extend({
    email: "",
    mobile: "",
    name: "",


    actions: {
        submit()
        {
            let contact = this.store.createRecord("contact", {
                email: this.get("email"),
                mobile: this.get("mobile"),
                name: this.get("name")
            });
            contact.save();
            this.set("email", "");
            this.set("mobile", "");
            this.set("name", "");

            
        }
    }

});
