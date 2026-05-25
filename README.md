# Restaurant Group Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIRestaurantGroupOperationsAssistant`
- `AIRestaurantGroupOperationsOperations`
- `AIRestaurantGroupOperationsAnalytics`
- `AIRestaurantGroupOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/restaurant-group-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5320`

Seeded users:
- `admin@restaurant-group-operations.local / admin123`
- `manager@restaurant-group-operations.local / manager123`
- `analyst@restaurant-group-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/restaurant-group-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5320 npm run smoke
```
