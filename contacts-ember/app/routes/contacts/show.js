import Route from '@ember/routing/route';

export default Route.extend({

    model({id})
    {
        console.log(id);
        return this.store.findRecord("contact", id);
    },


    setupController(controller,model)
    {
        controller.set("id", model.id);
        controller.set("name", model.name);
        controller.set("email", model.email);
        controller.set("mobile", model.mobile);
    }
});
