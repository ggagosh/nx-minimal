import { Field, Int, ObjectType, Query, Resolver } from "@nestjs/graphql";

@ObjectType()
export class TestObject {
  @Field(() => Int)
  id: number;
}

@Resolver(() => TestObject)
export class AppResolver {

  @Query(() => TestObject)
  async test() {
    return { id: 1 };
  }
}
