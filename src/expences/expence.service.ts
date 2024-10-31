import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExpenceDto } from './dto/expence.dto';

Injectable();
export class ExpenceService {
  private expences = [
    {
      id: 1,
      expence: 143,
      category: 'Groccery',
    },
    {
      id: 2,
      expence: 456,
      category: 'Shopping',
    },
    {
      id: 3,
      expence: 825,
      category: 'Tech',
    },
  ];

  allExpences() {
    return this.expences;
  }

  createExpence(expenceFromUser: ExpenceDto) {
    if (!expenceFromUser.expence || !expenceFromUser.category)
      throw new HttpException('Forms is not filled', HttpStatus.BAD_REQUEST);
    const newExpence = {
      id: (this.expences[this.expences.length - 1]?.id || 0) + 1,
      ...expenceFromUser,
    };
    this.expences.push(newExpence);
    return newExpence;
  }

  deleteExpence(id: number) {
    const index = this.expences.findIndex((expence) => expence.id === id);
    if (index == -1)
      throw new HttpException('Expence not found', HttpStatus.NOT_FOUND);
    const deletedExpence = this.expences.splice(index, 1);
    return deletedExpence;
  }

  updateExpence(newExpenceFills: ExpenceDto, id: number) {
    if (!newExpenceFills.expence || !newExpenceFills.category)
      throw new HttpException('Forms is not filled', HttpStatus.BAD_REQUEST);
    const index = this.expences.findIndex((expence) => expence.id === id);
    if (index == -1)
      throw new HttpException('Expence not found', HttpStatus.NOT_FOUND);
    this.expences[index] = {
      id,
      ...newExpenceFills,
    };
    return this.expences[index];
  }
}
