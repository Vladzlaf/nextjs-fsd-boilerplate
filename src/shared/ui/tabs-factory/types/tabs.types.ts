export interface TabConfig<T extends string> {
  value: T
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export interface TabsFactoryProps<T extends string> {
  tabs: TabConfig<T>[]
  defaultValue?: T
  value?: T
  onValueChange?: (value: T) => void
  orientation?: 'horizontal' | 'vertical'
  className?: string
  tabsListClassName?: string
  tabsTriggerClassName?: string
  tabsContentClassName?: string
  triggerVariant?: 'default' | 'secondary' | 'outline' | 'ghost'
  triggerSize?: 'default' | 'sm' | 'lg'
}

export interface SelfControlledTabsFactoryProps<T extends string>
  extends Omit<TabsFactoryProps<T>, 'value' | 'onValueChange'> {
  defaultTab?: T
}
