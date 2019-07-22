const Mutations = {
  createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in

    const item = ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  },
  updateItem(parent, args, ctx, info) {
    //first take copy of updates
    const updates = { ...args };

    // reomve the id from the updates since you cannot update the ids
    delete updates.id;

    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );
  }
};

module.exports = Mutations;
