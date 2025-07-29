import { clsx } from 'clsx';

export const style = {
  container: clsx(
    'w-full',
    'rounded-2xl',
    'pt-[24px]',
    'pb-[24px]',
    'mb-[16px]',
    'bg-graphite',
    'items-center',
    'gap-4',
  ),
  image: clsx('w-full', 'h-[400px]'),
  innerContainer: clsx('items-center', 'pr-4 pl-4'),
  wrap: clsx('w-full', 'flex-row'),
  titleText: clsx('text-lg color-white font-semibold shrink'),
  yearText: clsx('text-base color-white font-regular'),
};
