'use client'

import { MouseEvent } from 'react'
import { DownloadIcon, Link2Icon } from '@radix-ui/react-icons'

import { buttonVariants } from './ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './ui/context-menu'

import { Sticker } from '~/types'
import { cn } from '~/lib/utils'

export interface StickerImgEvents {
  onClick: (e: MouseEvent<HTMLImageElement>, s: Sticker) => void
  onMenuClick: (i: MenuType, s: Sticker) => void
}

interface StickerImgProps extends StickerImgEvents {
  it: Sticker
}

export enum MenuType {
  DOWNLOAD,
  COPY_URL
}

export function StickerImg({ it, onClick, onMenuClick }: StickerImgProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <figure
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'p-1 hover:bg-muted transition-colors border-none h-[55px] w-[55px] cursor-pointer',
          )}
        >
          <img
            loading="lazy"
            src={it.icon}
            alt={it.name}
            onClick={(e) => onClick?.(e, it)}
            width={55}
            height={55}
            crossOrigin="anonymous"
            className="dark:brightness-50"
          />
        </figure>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => onMenuClick(MenuType.DOWNLOAD, it)}>
          <DownloadIcon className="mr-2" />
          Download
        </ContextMenuItem>
        <ContextMenuItem onClick={() => onMenuClick(MenuType.COPY_URL, it)}>
          <Link2Icon className="mr-2" />
          Copy URL
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
