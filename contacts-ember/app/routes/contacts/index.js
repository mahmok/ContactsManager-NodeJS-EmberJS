import Route from '@ember/routing/route';

export default Route.extend({

    model()
    {
        return this.store.findAll("contact");
    },


    actions: {
        show(id)
        {
            this.transitionTo("contacts.show", id);
        },
        delete(id)
        {
            this.store.findRecord('contact', id, { backgroundReload: false }).then(function(contact) {
                contact.destroyRecord(); // => DELETE to /posts/2
              });

        }
    }
});
