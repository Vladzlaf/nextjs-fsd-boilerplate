import * as React from 'react'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../tabs/tabs'
import {
  SelfControlledTabsFactoryProps,
  TabsFactoryProps,
} from '../types/tabs.types'

const triggerVariants = {
  default:
    'data-[state=active]:bg-button-accent data-[state=active]:text-white',
  secondary:
    'data-[state=active]:bg-accent-opacity data-[state=active]:text-text-accent',
  outline:
    'data-[state=active]:border data-[state=active]:border-text-accent data-[state=active]:text-text-accent',
  ghost: 'data-[state=active]:text-text-accent',
}

const triggerSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 px-3 py-1',
  lg: 'h-12 px-6 py-3',
}

export function TabsFactory<T extends string>({
  tabs,
  defaultValue,
  value,
  onValueChange,
  orientation = 'horizontal',
  className,
  tabsListClassName,
  tabsTriggerClassName,
  tabsContentClassName,
  triggerVariant = 'default',
  triggerSize = 'default',
}: TabsFactoryProps<T>) {
  const handleValueChange = React.useCallback(
    (newValue: string) => {
      onValueChange?.(newValue as T)
    },
    [onValueChange],
  )

  return (
    <Tabs
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange ? handleValueChange : undefined}
      orientation={orientation}
      className={cn('w-full', className)}
    >
      <TabsList
        className={cn(
          'mb-6 p-1 bg-transparent rounded-[12px]',
          orientation === 'vertical' && 'flex-col h-auto w-fit',
          tabsListClassName,
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={cn(
              'cursor-pointer flex-1 transition-all duration-200 font-light text-[12px] rounded-[10px]',
              'data-[state=active]:shadow-sm',
              'hover:bg-white/50',
              triggerVariants[triggerVariant],
              triggerSizes[triggerSize],
              orientation === 'vertical' && 'w-full justify-start',
              tabsTriggerClassName,
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={cn('outline-none', tabsContentClassName)}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export function SelfControlledTabsFactory<T extends string>({
  tabs,
  defaultTab,
  ...props
}: SelfControlledTabsFactoryProps<T>) {
  const [activeTab, setActiveTab] = React.useState<T>(
    defaultTab || tabs[0]?.value,
  )

  return (
    <TabsFactory
      tabs={tabs}
      value={activeTab}
      onValueChange={setActiveTab}
      {...props}
    />
  )
}
