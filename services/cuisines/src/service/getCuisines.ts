import type { GetCuisines } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';
import sendMessage from './kafka';

const getCuisines: GetCuisines = async () => {
  const cuisines = await cuisinesRepository.getAll();

  sendMessage('GOT', { id: '-1', name: 'all cuisines' });

  return cuisines;
};

export default getCuisines;
