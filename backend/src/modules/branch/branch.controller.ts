import { Controller, Get, Query } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get('merge')
  async mergeBranch(
    @Query('fromBranchId') fromBranchId: string,
    @Query('intoBranchId') intoBranchId: string,
  ) {
    return await this.branchService.mergeBranch(
      parseInt(fromBranchId, 10),
      parseInt(intoBranchId, 10),
    );
  }
}
