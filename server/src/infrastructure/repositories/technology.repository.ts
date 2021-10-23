import shortid from 'shortid';
import Technology from '../../domain/entities/technology.entity';

class TechnologyRepository {
  private techologies: Technology[];

  constructor() {
    this.techologies = [];

    this.save(new Technology('Java'));
    this.save(new Technology('Javascript'));
    this.save(new Technology('C#'));

    console.log(this.techologies);
  }

  async findOneById(id: string): Promise<Technology | null> {
    const technology = this.techologies.find(t => t.getId() === id);
    return technology ? technology : null;
  }

  async findAll(): Promise<Technology[]> {
    return this.techologies;
  }

  async exists(name: string): Promise<boolean> {
    const rate = this.techologies.find(t => t.getName() == name);
    if (rate) {
      return true;
    }
    return false;
  }

  async save(technology: Technology): Promise<void> {
    if (!technology.getId()) {
      technology.setId(shortid.generate());
      this.techologies.push(technology);
    } else {
      this.techologies = this.techologies.map(function (t) {
        return t.getId() === technology.getId() ? technology : t;
      });
    }
  }

  async deleteById(id: string): Promise<void> {
    this.techologies = this.techologies.filter(t => t.getId() !== id);
  }
}

export default new TechnologyRepository();
