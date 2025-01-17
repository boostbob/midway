import { Get, Inject, Provide, Query, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';

@Provide()
export class FuncService {

  @Inject()
  ctx;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    method: 'get',
    path: '/func/http/get'
  })
  async handler(@Query() name) {
    return 'user:' + name;
  }

  @Get('/:test')
  async test() {
    return this.ctx.params.test;
  }
}
