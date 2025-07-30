import { clsx } from 'clsx';

export const style = {
  container: clsx('flex-row', 'items-center'),
  input: clsx(
    'flex-1',
    'h-12',
    'bg-graphite',
    'border',
    'border-mutedSlate',
    'rounded-tl-2xl',
    'rounded-bl-2xl',
    'pl-4',
    'text-white',
    'text-[16px]',
  ),
  button: clsx(
    'w-10',
    'h-12',
    'rounded-tr-2xl',
    'rounded-br-2xl',
    'bg-red',
    'justify-center',
    'items-center',
    'border-red',
    'border-1',
  ),
};
