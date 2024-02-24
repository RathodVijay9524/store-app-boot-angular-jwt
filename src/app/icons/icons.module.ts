import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconHomeCheck,
  IconCirclePlus,
  IconBuildingStore,
  IconCategoryFilled,
  IconFileDiff,
  IconUsersGroup,
  IconTruckReturn,
  IconLogout2,
  IconPlus,
  IconMinus,
  IconHttpDelete,
  IconTrash,
  IconTruckDelivery,
} from 'angular-tabler-icons/icons';
import { TablerIconsModule } from 'angular-tabler-icons';

const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconHomeCheck,
  IconCirclePlus,
  IconBuildingStore,
  IconCategoryFilled,
  IconFileDiff,
  IconUsersGroup,
  IconTruckReturn,
  IconLogout2,
  IconPlus,
  IconMinus,
  IconHttpDelete,
  IconTrash,
  IconTruckDelivery,
};


@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    CommonModule,
    TablerIconsModule
  ]
})
export class IconsModule { }
