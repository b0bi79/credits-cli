import test from 'ava';
import minimal from './minimal';
import credits from './credits.spec.json';

test( 'minimal reporter', t => {

  let result = minimal( 'foo', credits ).split( '\n' );

  t.same( result[ 0 ], 'Credits for foo' );
  t.same( result[ 1 ], 'foo relies on the work of 3 people:' );
  t.same( result[ 3 ], 'Alice Bobson (3 packages)' );
  t.same( result[ 4 ], 'Bob Calsow bob@calsow.io (2 packages)' );
  t.same( result[ 5 ], 'Jonny John (1 package)' );
  t.end();
} );