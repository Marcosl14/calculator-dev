import Technology from '../entities/technology.entity';

interface searchMethodInterfase {
  technology?: Technology | null;
  seniority?: string | null;
  language?: string | null;
  currency?: string | null;
}

export default searchMethodInterfase;
