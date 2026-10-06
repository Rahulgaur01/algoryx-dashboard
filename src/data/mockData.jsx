export const dashboardCards = [
  { id: 1, title: 'Total Revenue', value: '$54,230', icon: 'FiDollarSign', trend: '+12.5%', trendUp: true },
  { id: 2, title: 'Total Orders', value: '1,234', icon: 'FiShoppingCart', trend: '+8.2%', trendUp: true },
  { id: 3, title: 'Customers', value: '892', icon: 'FiUsers', trend: '+5.1%', trendUp: true },
  { id: 4, title: 'Conversion Rate', value: '3.6%', icon: 'FiTrendingUp', trend: '-0.8%', trendUp: false },
];

export const recentOrders = [
  { id: '#ORD-001', customer: 'Aarav Sharma', product: 'Wireless Headphones', amount: '$120', status: 'Completed', date: '2025-04-01' },
  { id: '#ORD-002', customer: 'Priya Patel', product: 'Smart Watch', amount: '$250', status: 'Processing', date: '2025-04-02' },
  { id: '#ORD-003', customer: 'Rohan Mehta', product: 'Bluetooth Speaker', amount: '$80', status: 'Completed', date: '2025-04-02' },
  { id: '#ORD-004', customer: 'Sneha Reddy', product: 'Laptop Stand', amount: '$45', status: 'Pending', date: '2025-04-03' },
  { id: '#ORD-005', customer: 'Vikram Singh', product: 'Mechanical Keyboard', amount: '$150', status: 'Completed', date: '2025-04-03' },
];

export const notifications = [
  { id: 1, title: 'New order received', message: 'Order #ORD-005 placed by Vikram', time: '2 min ago', icon: 'FiShoppingBag' },
  { id: 2, title: 'Payment confirmed', message: 'Payment for #ORD-004 confirmed', time: '15 min ago', icon: 'FiCreditCard' },
  { id: 3, title: 'New customer registered', message: 'Sneha Reddy joined', time: '1 hour ago', icon: 'FiUserPlus' },
];

export const user = {
  name: 'Alex Johnson',
  role: 'Admin',
  email: 'alex@algoryx.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
};