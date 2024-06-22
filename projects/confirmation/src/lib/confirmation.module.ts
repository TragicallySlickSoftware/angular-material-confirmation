/*
 * Tragically Slick Confirmation - A reusable confirmation component.
 * Copyright (C) 2023, Tragically Slick Software, LTD.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses>
 */

import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './confirmation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContainer, MatDialogContent } from '@angular/material/dialog';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogContainer,
    MatDialogContent,
    MatDialogActions
  ],
  exports: [ConfirmationComponent]
})
export class ConfirmationModule {}
