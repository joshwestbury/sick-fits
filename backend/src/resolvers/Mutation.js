const Mutations = {
  createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in

    const item = ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  }

  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dobs || [];
  //   // create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
