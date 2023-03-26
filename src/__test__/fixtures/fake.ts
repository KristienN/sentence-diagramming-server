import mongoose from 'mongoose';
import { Simple } from '../../models/simple.model';

export const fakeSimple: Simple = {
  sentence: 'Toilet paper is helpful',
  type: 'simple',
  structure: {
    subject: {
      word: 'paper',
      type: 'noun',
      modifier: [
        {
          word: 'Toilet',
          type: 'adjective',
          modifier: [],
        },
      ],
    },
    predicate: {
      word: 'is',
      type: 'verb',
      modifier: [],
    },
    object: {
      word: 'helpful',
      type: 'subject-compliment',
      modifier: [],
    },
  },
};

export const fakeGrade = {
  user: 'fake client',
  date: new Date(),
  score: 10,
};

export const badfakeGrade = {
  user: 10,
  date: 10,
  score: 10,
};

export const fakeSimpleWithId = {
  _id: new mongoose.Types.ObjectId().toString(),
  sentence: 'Toilet paper is helpful',
  type: 'simple',
  structure: {
    subject: {
      word: 'paper',
      type: 'noun',
      modifier: [
        {
          word: 'Toilet',
          type: 'adjective',
          modifier: [],
        },
      ],
    },
    predicate: {
      word: 'is',
      type: 'verb',
      modifier: [],
    },
    object: {
      word: 'helpful',
      type: 'subject-compliment',
      modifier: [],
    },
  },
};

export const fakeUpdateSimpleWithId = {
  _id: new mongoose.Types.ObjectId().toString(),
  sentence: 'Toilet paper is useful',
  type: 'simple',
  structure: {
    subject: {
      word: 'paper',
      type: 'noun',
      modifier: [
        {
          word: 'Toilet',
          type: 'adjective',
          modifier: [],
        },
      ],
    },
    predicate: {
      word: 'is',
      type: 'verb',
      modifier: [],
    },
    object: {
      word: 'useful',
      type: 'subject-compliment',
      modifier: [],
    },
  },
};

export const badFakeSimpleWithId = {
  _id: new mongoose.Types.ObjectId().toString(),
  sentence: 'Toilet paper is useful',
  structure: {
    subject: {
      word: 'paper',
      type: 'noun',
      modifier: [
        {
          type: 'adjective',
          modifier: [],
        },
      ],
    },
    predicate: {
      type: 'verb',
      modifier: [],
    },
    object: {
      word: 'useful',
      type: 'subject-compliment',
      modifier: [],
    },
  },
};
