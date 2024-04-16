import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Role } from '../enum'
import { RoleGuard } from '../guards/role.guard'

export function Auth(...roles: Role[]) {

  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
}
export function isCZMember(a, b) {
  console.log(a,b);

  return applyDecorators(UseGuards(AuthGuard('jwt'), RoleGuard))
}
