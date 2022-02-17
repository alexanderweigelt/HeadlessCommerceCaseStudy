<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Migrates a customer, product and category table with sample data
 */
final class Version20220217162343 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Migrates a customer, product and category table and inserts sample data';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, slug VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_64C19C1989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_product (category_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_149244D312469DE2 (category_id), INDEX IDX_149244D34584665A (product_id), PRIMARY KEY(category_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email_address VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, slug VARCHAR(255) NOT NULL, sku INT NOT NULL, price DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_D34A04AD989D9B62 (slug), UNIQUE INDEX UNIQ_D34A04ADF9038C4 (sku), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category_product ADD CONSTRAINT FK_149244D312469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_product ADD CONSTRAINT FK_149244D34584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->write('Successful created database tables for: categories, customers and products');
    }

    /**
     * postUp method for migrating the customer data
     *
     * @param Schema $schema
     * @return void
     */
    public function postUp(Schema $schema): void
    {
        try {
            $this->customerData();
            $this->categoryData();
            $this->productsData();
        }
        catch (\Doctrine\DBAL\Exception $exception)
        {
            $this->write('Abort with Exception: ' . $exception->getMessage());
        }
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category_product DROP FOREIGN KEY FK_149244D312469DE2');
        $this->addSql('ALTER TABLE category_product DROP FOREIGN KEY FK_149244D34584665A');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_product');
        $this->addSql('DROP TABLE customer');
        $this->addSql('DROP TABLE product');
    }

    /**
     * Inserts customer sample data
     *
     * @throws \Doctrine\DBAL\Exception
     */
    private function customerData(): void
    {
        $users = [
            [
                'first_name' => 'Sibylle',
                'last_name' => 'Behrens',
                'email_address' => 'jconrad@freenet.de',
            ],
            [
                'first_name' => 'Hans-J.',
                'last_name' => 'Brunner',
                'email_address' => 'diethard51@kretschmer.de',
            ],
            [
                'first_name' => 'Else',
                'last_name' => 'Götz-Hermann',
                'email_address' => 'qheim@adam.de',
            ],
            [
                'first_name' => 'Martin',
                'last_name' => 'Kessler',
                'email_address' => 'gretel.thiel@mayr.de',
            ],
            [
                'first_name' => 'Walburga',
                'last_name' => 'Straub',
                'email_address' => 'christl.gross@freitag.de',
            ],
        ];

        foreach ($users as $user) {
            // Insert statement by Doctrine\DBAL\Connection
            $this->connection->insert('customer', $user);
            $this->write('Added new row for customer: ' . $user['first_name'] . ' ' . $user['last_name']);
        }
    }


    /**
     * Inserts category sample data
     *
     * @throws \Doctrine\DBAL\Exception
     */
    private function categoryData(): void
    {
        $categories = [
            [
                'title' => 'Headgear',
                'description' => 'Headgear Category - Look for example articles for headgear',
                'slug' => 'headgear'
            ],
            [
                'title' => 'Tops',
                'description' => 'Clothing tops Category - Look for example articles for tops',
                'slug' => 'tops'
            ],
            [
                'title' => 'Bottoms',
                'description' => 'Clothing bottoms Category - Look for example articles for bottoms',
                'slug' => 'bottoms'
            ],
            [
                'title' => 'Caps',
                'description' => 'Caps category - Look for example articles for caps',
                'slug' => 'caps'
            ],
            [
                'title' => 'Pants',
                'description' => 'Pants category - Look for example articles for pants',
                'slug' => 'pants'
            ],
            [
                'title' => 'Shirts',
                'description' => 'Shirts Category - Look for example articles for shirts',
                'slug' => 'shirts'
            ],
            [
                'title' => 'Shorts',
                'description' => 'Shorts category - Look for example articles for shorts',
                'slug' => 'shorts'
            ],
            [
                'title' => 'Tanks',
                'description' => 'Tanks category - Look for example articles for tanks',
                'slug' => 'tanks'
            ]
        ];

        foreach ($categories as $category) {
            // Insert statement by Doctrine\DBAL\Connection
            $this->connection->insert('category', $category);
            $this->write('Added new row for category: ' . $category['title']);
        }
    }

    /**
     * Inserts products sample data
     *
     * @throws \Doctrine\DBAL\Exception
     */
    private function productsData(): void
    {
        $products = [
            [
                'name' => 'Flame Collective Cap',
                'description' => 'Buy the new Flame Collective Cap',
                'slug' => 'flame-collective-cap',
                'sku' => 1,
                'price' => 19.99,
                'categories' => [
                    1, 4
                ]
            ],
            [
                'name' => 'Eternal Youth Cap',
                'description' => 'Sale - Buy the new Eternal Youth Cap',
                'slug' => 'eternal-youth-cap',
                'sku' => 2,
                'price' => 14.89,
                'categories' => [
                    4
                ]
            ],
            [
                'name' => 'Valentine Cap',
                'description' => 'Buy the new Valentine Cap',
                'slug' => 'valentine-cap.',
                'sku' => 3,
                'price' => 39.45,
                'categories' => [
                    1, 4
                ]
            ],
            [
                'name' => 'Mithra Warmup Pant',
                'description' => 'Buy the new Mithra Warmup Pant',
                'slug' => 'mithra-warmup-pant',
                'sku' => 4,
                'price' => 24.40,
                'categories' => [
                    3, 5
                ]
            ],
            [
                'name' => 'Thorpe Track Pant',
                'description' => 'Buy the new Thorpe Track Pant',
                'slug' => 'thorpe-track-pant',
                'sku' => 5,
                'price' => 38.28,
                'categories' => [
                    3, 5
                ]
            ],
            [
                'name' => 'Supernova Sport Pant',
                'description' => 'Buy the new Supernova Sport Pant',
                'slug' => 'supernova-sport-pant.',
                'sku' => 6,
                'price' => 33.00,
                'categories' => [
                    3, 5
                ]
            ],
            [
                'name' => 'Emma Leggings',
                'description' => 'Buy the new Emma Leggings',
                'slug' => 'emma-leggings',
                'sku' => 7,
                'price' => 33.60,
                'categories' => [
                    3, 5
                ]
            ],
            [
                'name' => 'Cora Parachute Pant',
                'description' => 'Buy the new Cora Parachute Pant',
                'slug' => 'cora-parachute-pant',
                'sku' => 8,
                'price' => 50.00,
                'categories' => [
                    3, 5
                ]
            ],
            [
                'name' => 'Chaz Kangeroo Hoodie',
                'description' => 'Buy the new Chaz Kangeroo Hoodie',
                'slug' => 'chaz-kangeroo-hoodie',
                'sku' => 9,
                'price' => 70.00,
                'categories' => [
                    2, 6
                ]
            ],
            [
                'name' => 'Bruno Compete Hoodie',
                'description' => 'Buy the new Bruno Compete Hoodie',
                'slug' => 'bruno-compete-hoodie',
                'sku' => 10,
                'price' => 88.00,
                'categories' => [
                    2, 6
                ]
            ],
            [
                'name' => 'Miko Pullover Hoodie',
                'description' => 'Buy the new Miko Pullover Hoodie',
                'slug' => 'miko-pullover-hoodie',
                'sku' => 11,
                'price' => 120.20,
                'categories' => [
                    2, 6
                ]
            ],
            [
                'name' => 'Helena Hooded Fleece',
                'description' => 'Buy the new Helena Hooded Fleece',
                'slug' => 'helena-hooded-fleece',
                'sku' => 12,
                'price' => 55.00,
                'categories' => [
                    2, 6
                ]
            ],
            [
                'name' => 'Circe Hooded Ice Fleece',
                'description' => 'Buy the new Circe Hooded Ice Fleece',
                'slug' => 'circe-hooded-ice-fleece',
                'sku' => 13,
                'price' => 77.99,
                'categories' => [
                    2, 6
                ]
            ],
            [
                'name' => 'Fiona Fitness Short',
                'description' => 'Buy the new Fiona Fitness Short',
                'slug' => 'fiona-fitness-short',
                'sku' => 14,
                'price' => 35.00,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Gwen Drawstring Bike Short',
                'description' => 'Buy the new Gwen Drawstring Bike Short',
                'slug' => 'gwen-drawstring-bike-short',
                'sku' => 15,
                'price' => 44.00,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Ana Running Short',
                'description' => 'Buy the new Ana Running Short',
                'slug' => 'ana-running-short',
                'sku' => 16,
                'price' => 33.67,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Mimi All-Purpose Short',
                'description' => 'Buy the new Mimi All-Purpose Short',
                'slug' => 'mimi-all-purpose-short',
                'sku' => 17,
                'price' => 22.99,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Apollo Running Short',
                'description' => 'Buy the new Apollo Running Short',
                'slug' => 'apollo-running-short',
                'sku' => 18,
                'price' => 39.50,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Meteor Workout Short',
                'description' => 'Buy the new Meteor Workout Short',
                'slug' => 'meteor-workout-short',
                'sku' => 19,
                'price' => 77.00,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Arcadio Gym Short',
                'description' => 'Buy the new Arcadio Gym Short',
                'slug' => 'arcadio-gym-short.',
                'sku' => 20,
                'price' => 66.00,
                'categories' => [
                    3, 7
                ]
            ],
            [
                'name' => 'Vulcan Weightlifting Tank',
                'description' => 'Buy the new Vulcan Weightlifting Tank',
                'slug' => 'vulcan-weightlifting-tank',
                'sku' => 21,
                'price' => 35.00,
                'categories' => [
                    2, 8
                ]
            ],
            [
                'name' => 'Tiberius Gym Tank',
                'description' => 'Buy the new Tiberius Gym Tank',
                'slug' => 'tiberius-gym-tank',
                'sku' => 22,
                'price' => 33.99,
                'categories' => [
                    2, 8
                ]
            ],
            [
                'name' => 'Atlas Fitness Tank',
                'description' => 'Buy the new Atlas Fitness Tank',
                'slug' => 'atlas-fitness-tank',
                'sku' => 23,
                'price' => 44.55,
                'categories' => [
                    2, 8
                ]
            ],
            [
                'name' => 'Bella Tank',
                'description' => 'Buy the new Bella Tank',
                'slug' => 'bella-tank',
                'sku' => 24,
                'price' => 29.00,
                'categories' => [
                    2, 8
                ]
            ],
            [
                'name' => 'Nona Fitness Tank',
                'description' => 'Buy the new Nona Fitness Tank',
                'slug' => 'nona-fitness-tank',
                'sku' => 25,
                'price' => 39.00,
                'categories' => [
                    2, 8
                ]
            ]
        ];

        foreach ($products as $product) {
            $categories = array_pop($product);
            // Insert statement by Doctrine\DBAL\Connection
            $this->connection->insert('product', $product);
            $row = $this->connection->lastInsertId('product');
            $this->setProductCategoryRelations($categories, $row);
            $this->write('Added new row for product: ' . $product['name']);
        }
    }

    /**
     * @throws \Doctrine\DBAL\Exception
     */
    private function setProductCategoryRelations(array $categories, string $row): void
    {
        foreach ($categories as $category) {
            // Insert statement by Doctrine\DBAL\Connection
            $this->connection->insert('category_product', ['category_id' => $category, 'product_id' => $row]);
        }
    }
}
